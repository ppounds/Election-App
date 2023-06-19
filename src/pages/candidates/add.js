import React from 'react'
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button'

const AddCandidate = () => {
  return (
    <div>
        <form>
            <Card title="Candidate Information">
                <Input type="text" id="candidateName" name="candidate name" title="Candidate Name"/>
                <Input type="tel" id="telephone" name="telephone" title="Telephone Number" />
                <Input type="file" id="profile" name="profile" title="Profile Picture"/>
                <Input type="text" id="positions" name="positions" title="Positions"/>

                <Button type="submit" title="Submit"/>
            </Card>
        </form>
    </div>
  )
}

export default AddCandidate