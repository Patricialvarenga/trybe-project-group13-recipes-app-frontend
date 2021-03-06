import { number, string } from 'prop-types';
import React from 'react';

const RecipeCard = ({ recipeName, image, recipeText, index }) => (
  <div>
    <h3 data-testid={ `${index}-card-name` }>{recipeName}</h3>
    <img
      data-testid={ `${index}-card-img` }
      src={ image }
      alt={ `${recipeName} finished` }
      width="200px"
    />
    <p data-testid={ `${index}-recipe-card` }>{recipeText}</p>
  </div>
);

export default RecipeCard;

RecipeCard.propTypes = {
  recipeName: string.isRequired,
  image: string.isRequired,
  recipeText: string,
  index: number.isRequired,
};

RecipeCard.defaultProps = {
  recipeText: '',
};
