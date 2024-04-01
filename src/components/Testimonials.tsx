export default function Testimonials() {
  // array holding our data objects

  // state specifying which data object index is selected

  // button component, takes in a data object and our selected index state props
    // if our data object is selected, add gradient border
    // onClick it would set the index for data object in our state
  
  // Review component, takes in the object at selectedIndex and loads in that review


  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-5 grid-rows-3 justify-items-center gap-10 max-w-7xl">
        <button className="w-20 h-20 translate-y-2 bg-white rounded-full col-start-1 col-end-2" />
        <button className="w-20 h-20 bg-white rounded-full col-start-3 col-end-4" />
        <button className="w-20 h-20 translate-y-1 bg-white rounded-full col-start-5 col-end-6" />
        <button className="w-20 h-20 bg-white rounded-full col-start-2 col-end-3" />
        <button className="w-20 h-20 translate-y-3 bg-white rounded-full col-start-4 col-end-5" />
        <button className="w-20 h-20 -translate-x-5 bg-white rounded-full col-start-1 col-end-2" />
        <button className="w-20 h-20 translate-x-10 bg-white rounded-full col-start-5 col-end-6" />
      </div>
    </div>
  );
}
