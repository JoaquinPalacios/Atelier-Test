import ItemDetail from "../ItemDetail";

const ItemContainer = ({ data }) => {
    return (
        <div>
            <ItemDetail data={data} />
        </div>
    );
}
 
export default ItemContainer;