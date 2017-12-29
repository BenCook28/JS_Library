// We can solve issues with styling with styled 
// components as shown in this documentation 
// (https://github.com/styled-components/styled-compon...)

// Here's an example from Chris Achard's React Daily emails

import styled from 'styled-components';

const Title = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;

const Author = styled.p`
  font-size: 14px;
`;
And now they are regular components that we can use to display a book:

<Title>The Martian</Title>
<Author>Andy Weir</Author>
The CSS inside of the styled backticks is just CSS -
 which means it supports the full range of what CSS can do. 
 So if you want a hover style for example, you can define one:

const Title = styled.p`
  color: blue;

  &:hover {
   color: orange;
  }

`;

// As Chris Achard said in the same email:

// The proper name for the code inside of those backticks is 
// tagged template literals - and it's just part of ES6! That means 
// that you can do anything you can normally do in a template literal 
// - like interpolation. 