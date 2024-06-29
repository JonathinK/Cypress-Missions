import React, { useState } from 'react';
import { Categories, Category, CategorySelection, CheckboxInput, Filter, FilterTitleBar, Heading3, Heading5, Label, CategoryTitle, FilterCounter, FilterSelection, SelectionBlock, Heading6, Heading4 } from '../styles';

 export const FilterComponent = ({ categories, tags, selectedTags, onTagChange, filteredItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [showCategories,setShowCategories ] = useState(false);
  

  // Group tags by category
  const categorizedTags = tags.reduce((acc, tag) => {
    if (!acc[tag.tagFamilies]) acc[tag.tagFamilies] = [];
    acc[tag.tagFamilies].push(tag);
    return acc;
  }, {});

  // Calculate counts for each tag
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag.value] = filteredItems.filter(item =>
      Array.isArray(item.tags) && item.tags.some(t => t.value === tag.value)
    ).length;
    return acc;
  }, {});


  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories(expandedCategories.includes(category)
      ? expandedCategories.filter(c => c !== category)
      : [...expandedCategories, category]
    );
  };
  
  // Toggle visibility of categories on mobile and tablet
  const toggleCategoriesVisibility = () => {
    setShowCategories(!showCategories);
  };
  // Handle keyboard event for toggling category
  const handleKeyDown = (event, category) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCategory(category);
    }
  };

  // Filter tags based on search term
  const filteredTags = (tags) => tags.filter(tag => tag.value.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Filter>
      <FilterTitleBar onClick={toggleCategoriesVisibility}>
      <Heading3>Filters</Heading3>
      </FilterTitleBar>
      <Categories $showCategories={showCategories}>
      {Object.keys(categorizedTags).map(category => (
        <Category key={category}>
          <CategoryTitle
            className="category_title"
            onClick={() => toggleCategory(category)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, category)}
          >
          <Heading6>{category}</Heading6>
          <span>{expandedCategories.includes(category) ? '▲' : '▼'}</span>
          </CategoryTitle>
        {expandedCategories.includes(category) && (
          <CategorySelection>
            {filteredTags(categorizedTags[category]).map(tag => (
              <SelectionBlock
                className="selection_block" 
                key={tag.value}
              >
                <FilterSelection>
                  <CheckboxInput
                    type="checkbox"
                    id="filter_input"
                    value={tag.value}
                    checked={selectedTags.includes(tag.value)}
                    onChange={() => onTagChange(tag.value)} 
                  />
                  <Label htmlFor='filter_input'>  
                  {tag.value}
                  </Label> 
                </FilterSelection>
                  <FilterCounter>
                     {tagCounts[tag.value]}
                  </FilterCounter>
                </SelectionBlock>
              ))}
            </CategorySelection>
          )}
        </Category>
      ))}
      </Categories> 
    </Filter>
  );
};
