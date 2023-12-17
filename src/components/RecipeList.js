import { Container } from "@mui/system";
import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Grid, Header } from "semantic-ui-react";

export default function RecipeList({ recipes, searchedQuery }) {
  return (
    <>
      <Container>
        <Header
          size="huge"
          content={`RECIPE LIST FOR ${searchedQuery}`}
          textAlign="center"
        />
        <Grid columns={4} doubling>
          {recipes &&
            recipes.map((recipe) => {
              return (
                <Grid.Column>
                    <RecipeListItem recipes={recipe} />
                </Grid.Column>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
