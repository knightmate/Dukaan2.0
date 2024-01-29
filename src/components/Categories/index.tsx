import React from 'react';
import Modal from 'react-modal'
import { Category } from '../Body';
import Link from 'next/link';



interface CategoryPopupProps {
    isOpen: boolean;
    onClose: () => void;
    categories: Category[];
    onCategorySelected:(selectedId:string)=>void
}

const CategoryPopup: React.FC<CategoryPopupProps> = ({ onCategorySelected,isOpen, onClose, categories }) => {


    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div style={{ width: '100%', background: 'transparent', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="modal-content" id="popover-content"
                onClick={(event) => {

                    const id = event.target.id;
                    if (id == "popover-content") {
                        onClose()
                    }
                    event.stopPropagation()
                }}>
                <div style={{ maxWidth: '446px', width: "100%", borderWidth: 1, backgroundColor: 'white', borderRadius: "20px" }}>
                    <div className='containerBorderBottom' >
                        {categories.map(({ categoryId, categoryName, isSelected, products }) => {

                            return <CategoryPopupItem onClick={(categoryid: string) => {

                                onCategorySelected(categoryId)
 

                                return ""

                            }} uuid={categoryId} itemId={categoryId} categoryName={categoryName} productCount={products.length} />
                        })}
                    </div>

                    <div style={{ textAlign: 'center', display: 'flex', flex: 1, justifyContent: 'center', padding: '10px' }} >
                        <a href="/categories" style={{ color: '#146eb4', fontWeight: 'bold', fontSize: '18px' }} >View all categories --></a>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.3813 18.3813C14.0396 18.723 14.0396 19.277 14.3813 19.6187C14.723 19.9604 15.277 19.9604 15.6187 19.6187L22.6187 12.6187C22.7026 12.5348 22.7659 12.4381 22.8086 12.3349C22.8514 12.2318 22.875 12.1186 22.875 12C22.875 11.8814 22.8514 11.7682 22.8086 11.6651C22.7662 11.5626 22.7035 11.4666 22.6206 11.3831M22.6185 11.381L15.6187 4.38128C15.277 4.03957 14.723 4.03957 14.3813 4.38128C14.0396 4.72299 14.0396 5.27701 14.3813 5.61872L19.8876 11.125L2 11.125C1.51675 11.125 1.125 11.5167 1.125 12C1.125 12.4832 1.51675 12.875 2 12.875L19.8876 12.875L14.3813 18.3813"
                                fill="var(--primary)"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CategoryPopup;



interface CategoryPopupItemProps {
    uuid: string;
    itemId: string;
    categoryName: string;
    productCount: number;
    onClick: (itemId: string) => {}
}

const CategoryPopupItem: React.FC<CategoryPopupItemProps> = ({
    uuid,
    itemId,
    categoryName,
    productCount,
    onClick
}) => {


    return (
        <div
            style={{ display: 'flex', padding: '10px' }}
        >
            <Link onClick={() => {
                onClick(itemId)
            }} style={{ display: 'flex', flex: 1 }} className="lineClamp" data-category-popup-item-link="" href={''}>
                <p style={{ display: 'flex', flex: 1, color: 'black', fontSize: "12px", fontWeight: 'bold', alignItems: 'center' }}>
                    {categoryName}
                </p>
                <div style={{ backgroundColor: 'orange', padding: '5px', borderRadius: '2px' }}>
                    <p style={{ color: 'white' }}>{33}</p>
                </div>
            </Link>
        </div>
    );
};

