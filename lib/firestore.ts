import { collection, addDoc, getDocs, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "@/components/firebase/firebase";

const ENQUIRIES_COLLECTION = "enquiries";

export interface Enquiry {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  createdAt?: unknown;
  checked?: boolean;
}

function getTime(createdAt: unknown): number {
  if (!createdAt) return 0;
  if (createdAt instanceof Date) return createdAt.getTime();
  if (typeof createdAt === "object" && createdAt !== null && "toMillis" in createdAt) {
    return (createdAt as { toMillis: () => number }).toMillis();
  }
  if (typeof createdAt === "object" && createdAt !== null && "toDate" in createdAt) {
    return (createdAt as { toDate: () => Date }).toDate().getTime();
  }
  return 0;
}

export async function submitEnquiry(data: Omit<Enquiry, "id" | "createdAt" | "checked">): Promise<string> {
  const docRef = await addDoc(collection(db, ENQUIRIES_COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    checked: false,
  });
  return docRef.id;
}

export async function getEnquiries(): Promise<(Enquiry & { id: string; createdAt: unknown })[]> {
  const snapshot = await getDocs(collection(db, ENQUIRIES_COLLECTION));
  const rows = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt,
  })) as (Enquiry & { id: string; createdAt: unknown })[];
  rows.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
  return rows;
}

export async function setEnquiryChecked(id: string, checked: boolean): Promise<void> {
  const ref = doc(db, ENQUIRIES_COLLECTION, id);
  await updateDoc(ref, { checked });
}
