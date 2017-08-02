# Klondike

Generate a guid ID via client side javascript.

Over time I've encountered several instances where unique identifier generation was needed from the client side. My usual solution was to tack on an incremented integer value to an existing static ID. Trouble is, this typically requires maintaining a global variant. That's pure evil! It also falls apart should you need your ID unique across multiple instances.

Here's your solution! Nothing earth shattering - you could probably find ten more like it on Stack Overflow, but now you don't have to. This fully self contained script function will generate a GUID, exactly like those found in relational database systems. Add the output to an ID, and you will have a lengthy but almost assuredly unique ID for your form elements.

The main use is to dynamically allocate form fields. As an example, you might allow filtering by departments in a report. You want your users to have the option of selecting as many departments as they want without resorting to the horror of a write in field or cumbersome multi select boxes. Some well designed script would let your users add and remove drop select boxes using a familiar mobile phone style interface.

The problem is ensuring IEEE compliance (for those that care - I certainly do). You need unique IDs for the newly created fields, and want to avoid making a mess to get them, right? As above, just write a static label, run this function and add the result to produce a unique ID for your element. Done!

## Use Case
Download the source and import it to your project folders. Then treat it as any other javascript function.


```html
<script src="your path to source file here"></script>
```

```javascript
// Let's create and output a guid on page load.
$(document).ready(function() {
  // Generate a client side guid.
  $guid_id = dc_klondike_guid();
  
  // Ouput the guid in a message box.
  alert('Guid: ' + $guid_id);
});
```

## Word of Caution 
It should go without saying, but don't EVER rely on this or any other client side generated values for server side data. Don't. Nope. Not even then. This function is meant for client side work only. Use as intended and you're golden.
