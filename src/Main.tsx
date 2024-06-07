import {$model} from "@src/model";

export const Main = () => {
    return <div>{JSON.stringify($model.value, null, 4)}</div>
}