# Challenge: react chat bot panel

## General idea

![uml model](https://github.com/pr-olga/challenge-react-bot/blob/master/uml-model.png?raw=true)

- there is a general intents store
- this store is assigned (copied) to the client suggestions properties on the first load
- application Layer (begins at Home) does not have business logic but sends the data and get results only
- the logic is placed in the reducer (acc. to https://redux.js.org/style-guide/style-guide#put-as-much-logic-as-possible-in-reducers)

## Description

1. I choose Typescript

- helps to provide the business logic
- decrease the error rate

2. I choose DDD
3. I choose Redux

- two central layout components belong to different domains: ClientProfile (_ChoosenPanel_) vs Intens (_SuggestionsPanel_)
- i.e. there must be separation of concerns
- However, they consume the same data since there is a relation: User-Profile has a certain List of intens

4. The amount of props and manipulations on certain event is not big, that is why, I applied funcitonal components consistently
5. I applied Idiomatic CSS https://github.com/necolas/idiomatic-css inkl Sass
6. BEM
7. Because of time pressure, I could add only some test examples (_Salutation_, _App_)

## How I would proceed if the project must scale and I had more time

1. Redux store testing!
2. Cypress for E2E
3. if there is a huge amount of data: some sort of partial loading
   - pagination or
   - lazy loading on infinite scroll
4. introduce Atomic Design
5. one could implement drag and drop library and animation effects, which would make the app more intuitive
6. implement sass files dynamically and introduce more sass vars (margins, fonts etc.)
7. Bubbles must be extracted
8. I did not spend much time on Design, so colors and shapes can be improved as well
9. UX: the green icons could be added to the left panel and red to the right
