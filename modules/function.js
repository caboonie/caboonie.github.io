const FUNCTION_TEMPLATE = `<div class="object lineRecipient">
Function <span style="float: right;">Enclosing Frame: <span class="line frameSource">.</span> </span> <br>
Arguments:
<table>
  <tr class="argument">
    <td class="remove">x</td>
    <td class="argCol"><input type="text" name="" placeholder="..." class="nextEntry"></td>
  </tr>
</table><br>
Body:<br>
<textarea class="function-body"></textarea>
</div>`

const ARG_TEMPLATE = `<tr class="argument">
<td class="remove">x</td>
<td class="argCol"><input type="text" name="" placeholder="..." ></td>
</tr>`

const NEXT_ARG_TEMPLATE = `<tr class="argument">
<td class="remove">x</td>
<td class="argCol"><input type="text" name="" placeholder="..." class="nextEntry"></td>
</tr>`

export function functionSetup(element, value = null, lines_to_make = null) {
    // value should be a dictionary of the type {"body":"text here", "arguments":["x","y"], parent:4}
    element.append($(FUNCTION_TEMPLATE));

    if (value) {
        element.find(".function-body").html(value["body"]);
        element.find(".argument").remove();
        const arg_table = element.find(table);
        for (arg of value["arguments"]){
            const arg_entry = $(ARG_TEMPLATE);
            arg_entry.find(input).val(arg);
            arg_table.append(arg_entry);
        }
        arg_table.append($(NEXT_ARG_TEMPLATE));
        lines_to_make.append([element.find(".frameSource"), parseInt(value["parent"])]);
    }
}
