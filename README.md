# Memo 
memo means rendering the one component with respect to its parent component everytime we render its parents and thus causes a lot of time taking while rendering the component .. 
Thus useMemo comes in defination
<br>
while exporting the component use: export default React.memo(componentName)

# useMemo
Takes a function and then array of dependencies;

# useMemo vs useEffect
useMemo gives the value in return but not useEffect;

# useCallback
Returns a function 