import { Component, Input } from '@angular/core'

@Component({

selector : 'event-thumbnail',
template : `<div class="well hoverwell thumbnail">

<h2>{{event.name}}</h2>
<div>{{event.date}}</div>

<div>{{event.location.address}}</div> 
</div>`

})

export class EventThumbnailComponent{
   @Input() event:any

}