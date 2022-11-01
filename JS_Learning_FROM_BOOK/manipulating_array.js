const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']]
theList.pop()
theList.shift()
theList.unshift('First')
theList[3]='hello world'
theList[2]='MIDDLE'
theList.splice(4, 3, 'Last')
console.log(theList)

