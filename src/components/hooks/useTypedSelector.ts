import {State} from "../../state/store"
import {TypedUseSelectorHook, useSelector} from "react-redux"

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector