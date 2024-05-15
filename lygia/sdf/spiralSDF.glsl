/*
contributors: Patricio Gonzalez Vivo
description: Returns a spiral SDF
use: spiralSDF(<vec2> st, <float> turns)
options:
    - CENTER_2D : vec2, defaults to vec2(.5)
examples:
    - https://raw.githubusercontent.com/patriciogonzalezvivo/lygia_examples/main/draw_shapes.frag
*/

#ifndef FNC_SPIRALSDF
#define FNC_SPIRALSDF
float spiralSDF(vec2 st, float t) {
#ifdef CENTER_2D
    st -= CENTER_2D;
#else
    st -= 0.5;
#endif
    float r = dot(st, st);
    float a = atan(st.y, st.x);
    return abs(sin(fract(log(r) * t + a * 0.159)));
}
#endif