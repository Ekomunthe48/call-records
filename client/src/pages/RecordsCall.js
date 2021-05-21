import React, { useCallback, useEffect, useState } from 'react';
import { Card, Container} from 'react-bootstrap';

let url = `https://safe-falls-26521.herokuapp.com/records/`

const Record = () => {
    const [RecordCalls, setRecordCalls] = useState([])
    const [inboundCalls, setinboundCalls] = useState(0)
    const [outboundCalls, setoutboundCalls] = useState(0)
    const [inboundCallsAns, setinboundCallsAns] = useState(0)
    const [outboundCallsAns, setoutboundCallsAns] = useState(0)
    const [inboundCallsUnans, setinboundCallsUnans] = useState(0)
    const [outboundCallsUnans, setoutboundCallsUnans] = useState(0)
    const [inboundCallsFail, setinboundCallsFail] = useState(0)
    const [outboundCallsFail, setoutboundCallsFail] = useState(0)
    const [inboundCallsBusy, setinboundCallsBusy] = useState(0)
    const [outboundCallsBusy, setoutboundCallsBusy] = useState(0)
    const [inboundCallsMin, setinboundCallsMin] = useState(0)
    const [outboundCallsMin, setoutboundCallsMin] = useState(0)
    const [inboundCallsSecond, setinboundCallsSecond] = useState(0)
    const [outboundCallsSecond, setoutboundCallsSecond] = useState(0)

    const apiData = useCallback(() => {
        fetch(url, {method: "GET"})
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setRecordCalls(data)
          })
          .catch (error => {
            console.log(error)
          })
    })

    useEffect (() => {
      apiData();
    }, [apiData])

    const updateData = useCallback(() => {
      let inCalls = 0
      let outCalls = 0
      let inCallsAns = 0
      let outCallsAns = 0
      let inCallsUnans = 0
      let outCallsUnans = 0
      let inCallsFail = 0
      let outCallsFail = 0
      let inCallsBusy = 0
      let outCallsBusy = 0
      let inCallsMin = 0
      let outCallsMin = 0
      let inCallsSecond = 0
      let outCallsSecond = 0

      RecordCalls?.map(callRec => {
        if(callRec.type === "outgoing"){
          outCalls += 1
          outCallsMin += callRec.durationInMinutes
          outCallsSecond += callRec.durationInSeconds
          setoutboundCalls(outCalls)
          setoutboundCallsMin(outCallsMin)
          setoutboundCallsSecond(outCallsSecond)
        } else if (callRec.type === "ingoing") {
          inCalls += 1
          inCallsMin += callRec.durationInMinutes
          inCallsSecond += callRec.durationInSeconds
          setinboundCalls(inCalls)
          setinboundCallsMin(inCallsMin)
          setinboundCallsSecond(inCallsSecond)
        }

        if (callRec.status === "answered") {
          if(callRec.type === "outgoing"){
            outCallsAns += 1
            setoutboundCallsAns(outCallsAns)
          } else if (callRec.type === "ingoing") {
            inCallsAns += 1
            setinboundCallsAns(inCallsAns)
          }          
        }

        if (callRec.status === "unanswered") {
          if(callRec.type === "outgoing"){
            outCallsUnans += 1
            setoutboundCallsUnans(outCallsUnans)
          } else if (callRec.type === "ingoing") {
            inCallsUnans += 1
            setinboundCallsUnans(inCallsUnans)
          } 
        }

        if (callRec.status === "cancel") {
          if(callRec.type === "outgoing"){
            outCallsFail += 1
            setoutboundCallsFail(outCallsFail)
          } else if (callRec.type === "ingoing") {
            inCallsFail += 1
            setinboundCallsFail(inCallsFail)
          } 
        }

        if (callRec.status === "busy") {
          if(callRec.type === "outgoing"){
            outCallsBusy += 1
            setoutboundCallsBusy(outCallsBusy)
          } else if (callRec.type === "ingoing") {
            inCallsBusy += 1
            setinboundCallsBusy(inCallsBusy)
          } 
        }
      })

    })

    useEffect (() => {
      updateData()
    }, [updateData])

    return (
        <Container className='mt-2'>
            <h1>Data Dashboard Count</h1>
                 <Card className='m-2 text-justify rounded border border-info'>                        
                    <Card.Body className='text-info'>
                        <h1>Total</h1>
                        <Card.Title className='font-weight-bold'>Ingoing : {inboundCalls}</Card.Title>
                        <Card.Title className='font-weight-bold'>Outgoing: {outboundCalls}</Card.Title>
                        <br/>
                        <h1>Answered</h1>
                        <Card.Title className='font-weight-bold'>Ingoing : {inboundCallsAns}</Card.Title>
                        <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsAns}</Card.Title>
                        <br/>
                        <h1>Unanswered</h1>
                        <Card.Title className='font-weight-bold'>Ingoing : {inboundCallsUnans}</Card.Title>
                        <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsUnans}</Card.Title>
                        <br/>
                        <h1>Failed</h1>
                        <Card.Title className='font-weight-bold'>Ingoing : {inboundCallsFail}</Card.Title>
                        <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsFail}</Card.Title>
                        <br/>
                        <h1>Busy</h1>
                        <Card.Title className='font-weight-bold'>Ingoing : {inboundCallsBusy}</Card.Title>
                        <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsBusy}</Card.Title>
                        <br/>
                        <h1>Duration</h1>
                        {
                          inboundCallsSecond < 60 ? <Card.Title className='font-weight-bold'>Outgoing : {inboundCallsMin} Minutes {inboundCallsSecond} Seconds</Card.Title> : <Card.Title className='font-weight-bold'>Outgoing : {inboundCallsMin + Math.floor(inboundCallsSecond / 60)} Minutes {inboundCallsSecond % 60} Seconds</Card.Title>
                        }
                        {
                          outboundCallsSecond < 60 ? <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsMin} Minutes {outboundCallsSecond} Seconds</Card.Title> : <Card.Title className='font-weight-bold'>Outgoing : {outboundCallsMin + Math.floor(outboundCallsSecond / 60)} Minutes {outboundCallsSecond % 60} Seconds</Card.Title>
                        }
                    </Card.Body>
                </Card>
            
        </Container>
    );
};

export default Record;