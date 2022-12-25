function CategoryButtons({ selectedCategory, onCategorySelection }) {
    return (
        <div className='button-group'>
            <button
                className={selectedCategory === 'All' ? 'selected' : ''}
                onClick={() => onCategorySelection('All')}
            >
                All
            </button>
            <button
                className={selectedCategory === 'Breakfast' ? 'selected' : ''}
                onClick={() => onCategorySelection('Breakfast')}
            >
                Breakfast
            </button>
            <button
                className={selectedCategory === 'Lunch' ? 'selected' : ''}
                onClick={() => onCategorySelection('Lunch')}
            >
                Lunch
            </button>
            <button
                className={selectedCategory === 'Dinner' ? 'selected' : ''}
                onClick={() => onCategorySelection('Dinner')}
            >
                Dinner
            </button>
        </div>
    );
}

export default CategoryButtons;