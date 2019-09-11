/**
 * useEffect hook is a close replacement of
 * componentdidUpdate, DidMount, WillUnmount
 *
 * MEMO
 * useEffect(() => {
 * }, [<value>, <value>, ...])
 *
 * componentWillUnMount
 * useEffect(() => {
 * *** componentDidUpdate or DidMount code***
 * return () => {
 * *** componentWillMount code ***
 * }
 * })
 *
 */
