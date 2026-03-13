import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/alert-dialog"
import { useEffect } from "react"

const VERSION = "1.4.1";

interface UpdateDialogProps {
  show: boolean;
  toggleDialog: (val?: boolean) => void;
}

export const UpdateDialog = ({ show, toggleDialog }: UpdateDialogProps) => {
    useEffect(() => {
        const lastVersion = localStorage.getItem("last-version");
        if(lastVersion !== VERSION){
            setTimeout(() => toggleDialog(true), 1000) 
        }
    }, [])

    const handleClose = () => {
        toggleDialog();
        localStorage.setItem("last-version", VERSION);
    }

    return (
    <AlertDialog open={show} onOpenChange={toggleDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Новая версия калькулятора</AlertDialogTitle>
          <AlertDialogDescription className="text-left" asChild>
            <div>
                <span className="block">В новой версии калькулятора:</span> <br />
                <div>
                    <p>Операция инверсии перенесена в режим <span className="bg-blue-950 px-2 rounded">x <sup>y</sup> % z</span>. Данный режим теперь поддерживает степень <strong>-1</strong></p>
                    <br />
                    <p>Поля ввода были улучшены. Поля теперь поддерживают математические выражения с использованием операции сложения, вычитания и умножения</p>
                    <br />
                    <p>Чтобы прочитать обновление еще раз, нажмите на значок информации справа вверху</p>
                </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>Понятно</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}