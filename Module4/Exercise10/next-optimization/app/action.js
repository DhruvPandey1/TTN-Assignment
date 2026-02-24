"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTodoData() {
  console.log("Revalidating todo-data tag...");
  revalidateTag("todo-data");
}