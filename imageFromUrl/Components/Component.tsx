import { IImageProps, Image, ImageFit } from '@fluentui/react/lib/Image';
import * as React from 'react';
import { IComponentProps } from './IComponentProps';


const imageProps: Partial<IImageProps> = {
  src: 'https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'  ,
  // Show a border around the image (just for demonstration purposes)
  styles: props => ({ root: { border: '1px solid', maxWidth:'700px',minWidth:'500px' } }),
};

export const Component: React.FunctionComponent<IComponentProps> = (props) => {
// = () => {
  return ( 
                <Image
                
                {...imageProps}
                src=
                {(props.context.parameters.sampleProperty.raw)??
               'https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
 }
                alt="Example with no image fit value and only width is specified." width={'100%'} height={300} imageFit={ImageFit.contain}  />

  );
};