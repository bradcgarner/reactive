import React from 'react';
import { Router } from 'react-router-dom';

export default function Actions() {
  return (
      <div class="actions">
        <h3>Actions</h3>

        <div class="group">
          <div class="code xxxxxx in1"><p>export const ACTION_NAME = 'ACTION_NAME';</p></div>
          <div class="code xxxxxx in1"><p>export const actionName = arg => ( &#123;</p></div>
          <div class="code xxxxxx in2"><p>type: ACTION_NAME,</p></div>
          <div class="code xxxxxx in2"><p>arg</p></div>
          <div class="code xxxxxx in1"><p>&#125; );</p></div>
        </div>

        <div class="group">
          <div class="code xxxxxx in1"><p>export const asyncActionName = arg => dispatch => ( &#123;</p></div>
          <div class="code xxxxxx in2"><p>dispatch( actionName() );</p></div>
          <div class="code xxxxxx in2"><p>asyncFunctionReturnsPromise( arg )</p></div>
          <div class="code xxxxxx in3"><p>.then( res => dispatch( actionName( res ) ) )</p></div>
          <div class="code xxxxxx in3"><p>.catch( err => dispatch( actionName( err ) ) );</p></div>
          <div class="code xxxxxx in1"><p>} );</p></div>
        </div>

        </div>
  )
}