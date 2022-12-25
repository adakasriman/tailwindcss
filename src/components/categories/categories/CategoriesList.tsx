import React from 'react';
import { Categories } from './Categories';

type Props = {
    categoryTypes: string[]
}

export const CategoriesList: React.FC<Props> = ({ categoryTypes }) => {
    return (
        <div>
            <Categories categoryTypes={categoryTypes} />
        </div>
    )
}
