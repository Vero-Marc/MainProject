<script lang="ts">
    const dropdownOption = [{value:"Select",label:"Select"},
    {value:"Male",label:"Male"},
    {value:"Female",label:"Female"},
    ]
    let selectedOption = "Select"; 
</script>
<select data-testid="selectField" value={selectedOption}>
    {#each dropdownOption as option}
    <option value={option.value}> {option.value}</option>
{/each}
</select>