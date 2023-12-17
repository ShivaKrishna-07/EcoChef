import { Grid, Input, Form } from "semantic-ui-react";
import React, { useState } from "react";

export default function Search({ setSearchedQuery }) {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(value);
  };

  return (
    < >
      <Grid style={{margin:'50px'}} column={2} textAlign="center" className="search-box">
        <Grid.Column>
          <h2 className="search-heading">Search Recipes</h2>
          <Form onSubmit={onFormSubmit}>
            <Input
              placeholder="search"
              action={{ icon: "search", color: "blue" }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
