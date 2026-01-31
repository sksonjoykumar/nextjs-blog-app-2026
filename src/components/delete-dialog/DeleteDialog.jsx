"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

export default function DeleteDialog({ children, onConfirm }) {
  return (
    <AlertDialog>
      {/* Trigger */}
      {children}

      <AlertDialogContent size="sm">
        <AlertDialogHeader className="text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Trash2 size={20} />
          </div>
          <AlertDialogTitle>
            Are you sure you want to delete this blog?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex justify-center gap-4">
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
