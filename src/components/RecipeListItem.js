import React, { useState } from "react";
import { Image, Modal } from "semantic-ui-react";
import { Button, Card } from "semantic-ui-react";

export default function RecipeListItem({ recipes }) {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    setRandomNumber(randomNum);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Card>
      <img
        src={recipes.image ? recipes.image : "./images/bg.jpg"}
        style={{ height: 170 }}
      />
      <Card.Content>
        <Card.Header content={recipes.title} />
        <Card.Description>
          <h4>{recipes.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button onClick={generateRandomNumber} color="green">
              Nutrients
            </Button>
          }
        >
          <Modal.Header>{recipes.title}</Modal.Header>
          <Modal.Content image>
            <Image size="medium" src={recipes.image} wrapped />
            <Modal.Description>
              <h2>Nutrients:{recipes.title}</h2>
              <p>Calories: {randomNumber > 5 ? randomNumber + 2 : 5}grams</p>
              <p>Proteins: {randomNumber + 5}grams</p>
              <p>Fat: {randomNumber > 10 ? randomNumber - 1 : 8}grams</p>
              <p>Carbs: {randomNumber > 5 ? randomNumber : 7}grams</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)} positive>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>
      </Card.Content>
      <Card.Content>
        <Button color="primary">
              Add to Cart
            </Button>
      </Card.Content>
    </Card>
  );
}
