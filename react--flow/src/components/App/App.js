import React from 'react';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import s from './App.module.css';

const a: number = '3';

console.log(a);
const App = () => (
    <main className={s.container}>
        <Counter initialValue={0} />
        <Form onSubmit={user => {}} />
    </main>
);

export default App;
