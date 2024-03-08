import React from 'react';
import { Input } from './ui/input';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBar = ({onChange}: Props) => {
    return (
        <Input className='' type='string' placeholder='Github Username' onChange={onChange} />
    );
};

export default InputBar;
