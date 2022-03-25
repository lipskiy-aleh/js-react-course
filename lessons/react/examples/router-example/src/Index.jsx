

<Switch>
  <Route path='/students/list'>
    <StudentsList />
  </Route>

  <Route path='/students/:id' component={StudentsSingle} />

  <Route path='/students' render={() => <StudentsMain {...additionalProps} />} />
</Switch>


<Routes>
  <Route path='/students' element={<StudentsMain />} />
  <Route path='/students/:id' element={<StudentsSingle />} />
  <Route path='/students/list' element={<StudentsList />} />
</Routes>
