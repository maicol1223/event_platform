'use client';

import { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { deleteProfessional } from '@/lib/actions/professional.actions';

export const DeleteConfirmation = ({
  professionalId,
  onDelete,
}: {
  professionalId: string;
  onDelete: (id: string) => void; // Callback para actualizar el estado
}) => {
  const pathname = usePathname();
  let [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image src="/assets/icons/delete.svg" alt="delete" width={20} height={20} />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro de que quieres eliminar?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            Esto eliminará permanentemente a este profesional.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>

          <AlertDialogAction
            onClick={() =>
              startTransition(async () => {
                try {
                  await deleteProfessional({ professionalId, path: pathname });
                  onDelete(professionalId); // Llama al callback después de eliminar
                } catch (error) {
                  console.error('Error al eliminar profesional:', error);
                }
              })
            }
          >
            {isPending ? 'Eliminando...' : 'Eliminar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
