import React, {useState} from 'react';
import { Category, CheckboxInput, Filter, FilterSearchBar, Heading3, Heading4, Label, TextInput, Button, CategorySelection, Heading5, Paragraph } from '../styles'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

export const ProjectsFilter = ({ tags, selectedTags, onTagChange, filteredProjects }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Group tags by category
  const categorizedTags = tags.reduce((acc, tag) => {
    if (!acc[tag.tagFamilies]) acc[tag.tagFamilies] = [];
    acc[tag.tagFamilies].push(tag);
    return acc;
  }, {});
 
   // Calculate counts for each tag
   const tagCounts = tags.reduce((acc, tag) => {
    acc[tag.value] = filteredProjects.filter(project =>
      Array.isArray(project.tags) && project.tags.some(t => t.value === tag.value)
    ).length;
    return acc;
  }, {});

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories(expandedCategories.includes(category)
      ? expandedCategories.filter(c => c !== category)
      : [...expandedCategories, category]
    );
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

  return(
    <Filter>
    <div className='sticky_inner'>
      <Heading3>Filters</Heading3>
     {/*  <FilterSearchBar>
        <Label htmlFor='search'>Search Projects</Label>
        <TextInput
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
        />
      </FilterSearchBar> */}
      {Object.keys(categorizedTags).map(category => (
        <Category key={category}>
        <div 
        className="category_title"
        onClick={() => toggleCategory(category)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event, category)}
        >
          <Heading5>
            {category}
          </Heading5>
            <span>
              {expandedCategories.includes(category) ? '▲' : '▼'}
            </span>
        </div>
          {expandedCategories.includes(category) && (
            <CategorySelection>
              {filteredTags(categorizedTags[category]).map(tag => (
                <div 
                  className="selection_block" 
                  key={tag.value}
                >
                <div className="filter_input">
                  <CheckboxInput
                    type="checkbox"
                    id="filter_selection"
                    value={tag.value}
                    checked={selectedTags.includes(tag.value)}
                    onChange={() => onTagChange(tag.value)}
                    allowMultiple
                  />
                  <Label htmlFor='filter_selection'>  
                  {tag.value}
                  </Label> 
                </div>
                  <div className='count_box'>
                     {tagCounts[tag.value]}
                  </div>
                </div>
              ))}
            </CategorySelection>
          )}
        </Category>
      ))}
      {/* <Button>
        Apply Filters
      </Button> */}
    </div>
    </Filter>
  )
}