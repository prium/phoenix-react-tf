import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';

const flexCode = `
<>
  <div className="d-flex p-2 bg-200 mb-2">Flexbox container!</div>
  <div className="d-inline-flex p-2 bg-200">
    Inline flexbox container!
  </div>
</>`;

const flexDirectionRowCode = `<>
  <div className="d-flex p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-row-reverse p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-lg-row-reverse p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">
      Flex Item (<code>flex-direction:row-reverse</code> in <code>lg</code> screen )
    </div>
  </div>
</>`;

const flexDirectionColumnCode = `<>
  <div className="d-flex flex-column p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-column-reverse p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-column flex-lg-column-reverse p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-200 border border-400">Flex item 2 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-200 border border-400">Flex item 3 (<code>column-reverse</code> in <code>lg</code> screen )</div>
  </div>
</>`;

const justifyCode = `
<>
  <div justifyContent='start' className="d-flex justify-content-start bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='end' className="d-flex justify-content-end bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='center' className="d-flex justify-content-center bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='between' className="d-flex justify-content-between bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='around' className="d-flex justify-content-around bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='lg-center' className="d-flex justify-content-lg-center bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item (<code>justify-content:center</code> in <code>lg</code> screen)</div>
  </div>
</>`;

const alignItemsCode = `<>
  <Flex alignItems='start' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='end' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='center' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='baseline' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='stretch' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='lg-center' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item (<code>align-items:center</code> in <code>lg</code> screen)</div>
  </Flex>
</>`;

const alignSelfCode = `<>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-start">Align self start</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-end">Align self end</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-center">Align self center</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-baseline">Align self baseline</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-stretch">Align self stretch</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </Flex>
</>`;

const fillCode = `<>
  <Flex className="bg-200">
    <div className="p-2 flex-fill bg-200 border border-400">Flex item with a lot of content</div>
    <div className="p-2 flex-fill bg-200 border border-400">Flex item</div>
    <div className="p-2 flex-fill bg-200 border border-400">Flex item</div>
  </Flex>
</>`;

const growCode = `<>
  <Flex className="bg-200">
    <div className="p-2 flex-grow-1 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Third flex item</div>
  </Flex>
</>`;

const shrinkCode = `<>
  <Flex className="bg-200">
    <div className="p-2 w-100 bg-200 border border-400">Flex item</div>
    <div className="p-2 flex-shrink-1 bg-200 border border-400">Flex item</div>
  </Flex>
</>`;

const wrapCode = `<>
  <Flex wrap='nowrap' className="mb-3 bg-200 border border-300 py-3" style={{width: '8rem'}}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex wrap='wrap' className="mb-3 bg-200 border border-300">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex wrap='wrap-reverse' className="mb-3 bg-200 border border-300">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
</>`;

const orderCode = `<>
  <Flex className="bg-200 p-2 mb-2">  
    <div className="order-3 p-2 bg-200 border border-400">First flex item</div>
    <div className="order-2 p-2 bg-200 border border-400">Second flex item</div>
    <div className="order-1 p-2 bg-200 border border-400">Third flex item</div>
  </Flex>
</>`;

const alignContentCode = `<>
  <Flex alignContent='start' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='end' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='center' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='between' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='around' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='streach' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </Flex>
</>`;

const FlexExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Flex"
        description="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Behaviors">
            <p className="mb-0">
              Apply <code> display </code> utilities to create a flexbox container and transform
              direct children elements into flex items. Flex containers and items are able to be
              modified further with additional flex properties.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Row">
            <p className="mb-0 text-800">
              Use <code> .flex-row </code> to set a horizontal direction (the browser default), or
              .flex-row-reverse to start the horizontal direction from the opposite side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionRowCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Row">
            <p className="mb-0 text-800">
              Use <code> .flex-row </code> to set a horizontal direction (the browser default), or
              .flex-row-reverse to start the horizontal direction from the opposite side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionRowCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Column">
            <p className="mb-0 text-800">
              Use
              <code> .flex-column </code>
              to set a vertical direction, or
              <code> .flex-column-reverse </code>
              to start the vertical direction from the opposite side
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionColumnCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Justify Content">
            <p className="mb-0">
              Use <code>justifyContent</code> prop to change the alignment of flex items on the main
              axis (the x-axis to start, y-axis if <code>flex-direction: column</code>). Choose from{' '}
              <code>start</code> (browser default), <code>end</code>, <code>center</code>,{' '}
              <code>between</code>, <code>around</code>, or <code>evenly</code>. Set{' '}
              <code>justifyContent</code> with <code>{`{xxl | xl | lg | md | sm}`}</code> prefix for
              responsiveness.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={justifyCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FlexExample;
