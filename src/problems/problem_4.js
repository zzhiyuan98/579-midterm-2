import { useState } from "react";

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

function addS(number){
    return number===1 ? '' : 's';
}
const CLICK_COUNT_KEY = 'click_count';

export function Problem () {
    let initial = 0;
    const savedClickCount = localStorage.getItem(CLICK_COUNT_KEY);
    if(savedClickCount !== null){
        initial = JSON.parse(savedClickCount);
    }
    const [clickCount, setClickCount] = useState(initial);

    const handleCount = () => {
        onCountChanged(clickCount+1);
        setClickCount(clickCount+1);
    }
    const handleReset = () => {
        onCountChanged(0);
        setClickCount(0);
    }
    const onCountChanged = (count) => {
        const stringifiedCount = JSON.stringify(count);
        localStorage.setItem(CLICK_COUNT_KEY, stringifiedCount);
    }

    return <div className="btn-group">
            <button className="btn btn-primary" onClick={handleCount}>Clicked {clickCount} time{addS(clickCount)}</button>
            <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
        </div>;
    ;
}