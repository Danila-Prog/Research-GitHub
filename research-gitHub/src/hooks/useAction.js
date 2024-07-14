import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions as actionsFavorites } from "../store/favorities.slice/favorities.slice"

const rootAction = {
    ...actionsFavorites,
}
export const useAction = () => {
    const dispath = useDispatch()
    
    return useMemo(() => bindActionCreators(rootAction, dispath), [dispath])
}