import React from 'react'
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button'

const AddPositions = () => {
  return (
    <div>
      <form>
        <Card title="What position are you aspiring for?">
          <Input type="text" name="position" id="position" title="Position"/>
          <Input type="textarea" name="description" title="Description" id="description"/>

          <Button type="submit" title="Submit"/>
        </Card>
      </form>
    </div>
  )
}

export default AddPositions