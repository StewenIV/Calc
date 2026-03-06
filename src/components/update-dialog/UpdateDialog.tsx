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
        console.log(lastVersion)
        if(lastVersion !== "1.3.0"){
            setIsShow(true);
            localStorage.setItem("last-version", "1.3.0");
        }
    }, [])

    const handleClose = () => {
        setIsShow(false);
    }

    return (
    <AlertDialog open={isShow} onOpenChange={setIsShow}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Новая версия калькулятора</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            <div>
                <span className="mb-2">В новой версии калькулятора:</span> <br />
                <div>
                    <p>Изменена операция деления с остатком. Отрицательные числа теперь обрабатываются корректно</p>
                    <br />
                    <p>В режиме <span className="bg-blue-950">x <sup>y</sup> % z</span> в степени единица вводится по умолчанию</p>
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