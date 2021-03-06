import type { ThunkAction } from "../setup";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { State } from "../setup";
import { id } from "tsafe/id";
import { createSelector } from "@reduxjs/toolkit";

export type Usecase1State = {
    counter: number;
    isDoingSomething: boolean;
};

export const { reducer, actions, name } = createSlice({
    "name": "usecase1",
    "initialState": id<Usecase1State>({
        "counter": 0,
        "isDoingSomething": false,
    }),
    "reducers": {
        "thunk1Started": state => {
            state.isDoingSomething = true;
        },
        "thunk1Completed": (state, { payload }: PayloadAction<{ delta: number }>) => {
            const { delta } = payload;
            state.counter += delta;
            state.isDoingSomething = false;
        },
    },
});

export const thunks = {
    "thunk1":
        (params: { pX: string }): ThunkAction =>
        async (...args) => {
            const { pX } = params;
            const [dispatch, , thunkExtraArgument] = args;
            const { port2 } = thunkExtraArgument;

            dispatch(actions.thunk1Started());

            const r = await port2.port2Method1({ "port2Method2Param1": pX });

            dispatch(actions.thunk1Completed({ "delta": r }));
        },
    "thunk2":
        (params: { pY: string }): ThunkAction<Promise<number>> =>
        async (...args) => {
            const { pY } = params;
            const [dispatch, getState, { evtAction }] = args;

            if( getState().usecase2.isDoingSomething2 ){

                await evtAction.waitFor(e=> 
                    e.sliceName === "usecase2" && 
                    e.actionName === "thunkXCompleted" &&
                    e.payload.delta !== 666
                );

            }

            await dispatch(thunks.thunk1({ "pX": pY }));

            const { counter } = getState().usecase1;

            return counter + 42;
        },
};

export const selectors = (() => {
    const isBig = (state: State) => {
        const { counter } = state.usecase1;
        return counter > 1000;
    };

    const isReady = (state: State) => {
        const { counter, isDoingSomething } = state.usecase1;
        return !isDoingSomething && !isNaN(counter);
    };

    const isReadyBig = createSelector(isBig, isReady, (isBig, isReady) => isReady && isBig);

    return {
        isReady,
        isReadyBig,
    };
})();
