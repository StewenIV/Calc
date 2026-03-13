import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/alert-dialog"
import { useEffect, useState } from "react"

const VERSION = "1.4.0";

export const UpdateDialog = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const lastVersion = localStorage.getItem("last-version");
        if(lastVersion !== VERSION){
            setTimeout(() => setIsShow(true), 1000) 
        }
    }, [])

    const handleClose = () => {
        setIsShow(false);
        localStorage.setItem("last-version", VERSION);
    }

    return (
    <AlertDialog open={isShow} onOpenChange={setIsShow}>
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