export type Item = {
    id: string,
    data: string, 
}

export type ItemProps = {
    items?: Item[];
};

export type ItemAction = {
    type: string,
    item: Item,
}
