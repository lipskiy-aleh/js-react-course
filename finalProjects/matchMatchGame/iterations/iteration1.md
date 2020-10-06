## Iteration 1

1. Create app with `create-react-app`, [docs](https://github.com/facebook/create-react-app)
2. Add `react-router-dom`. [How to add, see presentation](https://slides.com/aleh_lipski/deck-9d97b4)
3. Create pages components:
   * Welcome pg
   * Profile pg
   * Game pg
   * Congratulation pg
   * Records(TOP result) pg
4. Implement router for this pages:
    ```
    /                 -> should redirect to /wlecome
    /welcome          -> WelcomePg
    /profile          -> ProfilePg
    /game             -> GamePg
    /congratulations  -> CongratulationPg
    /records          -> RecordsPg
    ```
5. Implement `WelcomePg`, [Page requirements](../pages/welcome)
