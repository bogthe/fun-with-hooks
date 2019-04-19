import React from 'react';
import { Counter } from './Count';
import { FriendStatus } from './ChatAPI';
import { CustomHooksList, CustomHooksSingle } from './CustomHooks';
import ExampleCode from './example-code';

const examplesArray = [
    { title: "useState(): Counter", code: ExampleCode.counter, comp: <Counter /> },
    { title: "useEffect(): Status", code: ExampleCode.status, comp: <FriendStatus friend={{ id: "1ffs"}} /> },
    { title: "useEffect(): Custom Hooks - Single", code: ExampleCode.customSingle, comp: <CustomHooksSingle friend={{ id: "singleId"}} /> },
    { title: "useEffect(): Custom Hook - CustomHooksList", code: ExampleCode.customList, comp: <CustomHooksList friend={{ id: "complexId", name: "Annoying Dude"}} /> },
];

const Wrapper = ({ title, children, code }) => (
    <div className="wrapper">
        <h2 className="examples-title">{title}</h2>

        <h4 className="result">Result</h4>
        <div className="component">
            {children}
        </div>
        
        <h4 className="code">Code</h4>
        <pre>
            <code className="language-js">
                {code}
            </code>
        </pre>
    </div>
);

export const Examples = () =>
    examplesArray.map(({ title, comp, code }) => (
        <Wrapper key={title} title={title} code={code}>
            {comp}
        </Wrapper>
    ));