var IshopComponent  = React.createClass({

    displayName: 'IshopComponent',

   render: function () {

    var ItemCard = this.props.cars.map( v =>
        React.DOM.div({className:'card', width:'18rem'},
        React.DOM.img({className:'card-img-top', src:v.image}),
        React.DOM.div({className:'card-body'}, 
        React.DOM.h5({className:'card-title'}, v.brandTitle),
        React.DOM.p({className:'card-text'}, v.modelTitle),
        React.DOM.p({className:'card-text'}, v.price),
        ),
        )
      );


    return  React.DOM.div( {className:'card'}, ItemCard )


   }



})

// propTypes: {
//     brandTitle: React.PropTypes.string.isRequired,
//     modelTitle: React.PropTypes.string.isRequired,
//     image:React.PropTypes.string.isRequired,
//     price:React.PropTypes.number.isRequired,

//   },


// render: function () {

   
//     



//     });

//     return React.DOM.div( {className:'VotesBlock'}, 
//     React.DOM.div( {className:'Question'}, this.props.question ),
//     React.DOM.div( {className:'Answers'}, ItemCard ),
//     );



// }