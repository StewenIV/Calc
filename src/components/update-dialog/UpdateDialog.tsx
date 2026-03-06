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

export const UpdateDialog = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const lastVersion = localStorage.getItem("last-version");
        if(lastVersion !== "1.3.0"){
            setTimeout(() => setIsShow(true), 1000) 
        }
    }, [])

    const handleClose = () => {
        setIsShow(false);
        localStorage.setItem("last-version", "1.3.0");
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
                    <p>Изменена операция деления с остатком. Отрицательные числа теперь обрабатываются корректно</p>
                    <br />
                    <p>В режиме <span className="bg-blue-950 px-2 rounded">x <sup>y</sup> % z</span> в степени <strong>1</strong> вводится по умолчанию</p>
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