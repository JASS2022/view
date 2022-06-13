import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// @ts-ignore
import { WASI } from "@wasmer/wasi"
import { WasmFs } from "@wasmer/wasmfs"
//import { add } from './add.wasm';

const wasmFs = new WasmFs();

let wasi = new WASI({
  args: [],
  env: {},
  bindings: {
    ...WASI.defaultBindings,
    fs: wasmFs.fs,
  },
});

const RustComponent: any = dynamic({
  loader: async () => {
    /*
    const response = await fetch('../add.wasm');
    const wasmBinary = await response.arrayBuffer();

    // Create the WASM instance
    const { instance }: any = await WebAssembly.instantiate(wasmBinary, {
      wasi_snapshot_preview1: wasi.wasiImport,
    });
    // Get the exported function
    const addFn = instance.exports.add;
    */
    // @ts-ignore
    return (props) => <div>{(props.number + props.number)}</div>
  },
})

// @ts-ignore
const Page: any = ({ router: { query } }) => {
  const number = parseInt(query.number || 30)
  return (
    <div>
      <RustComponent number={number} />
      <Link href={`/?number=${number + 1}`}>
        <a>+</a>
      </Link>
    </div>
  )
}

export default withRouter(Page)