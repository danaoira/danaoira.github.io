import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../utils'
import { vennData } from './data'

const VennDiagram = ({ radius, width }) => (
  <g transform={`translate(${(width - radius * 3.6) / 2}, 0)`}>
    <g transform={`translate(${radius * 1.8}, 64)`}>
      <text
        x="0"
        y="0"
        style={{
          fontFamily: theme.type.accent.fontFamily,
          fontSize: theme.type.fontSize[6],
          fill: theme.color.black,
          textAnchor: 'middle',
        }}
      >
        The Design Technology Skillset
      </text>
      <text
        x="0"
        y="32"
        style={{
          fontFamily: theme.type.accent.fontFamily,
          fontSize: theme.type.fontSize[3],
          fill: theme.color.black,
          textAnchor: 'middle',
          fontStyle: 'italic',
        }}
      >
        by{' '}
        <a
          href="http://ericknudtson.com/ux-design-technologist.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eric Knudtson
        </a>
      </text>
    </g>

    <g transform={`translate(0, 96)`}>
      <g>
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="rgba(255, 255, 255, 0.75)"
          stroke={theme.color.white}
          strokeWidth="2"
        />
        <text
          x={radius}
          y={radius * 0.5}
          style={{
            fontFamily: theme.type.accent.fontFamily,
            fontSize: theme.type.fontSize[4],
            fill: theme.color.black,
            textAnchor: 'middle',
          }}
        >
          {vennData.uxDesign.title}
        </text>
        {vennData.uxDesign.skills.map((d, i) => (
          <text
            key={d}
            x={radius}
            y={radius * 0.65 + i * parseFloat(theme.type.lineHeight[4])}
            style={{
              fontFamily: theme.type.default.fontFamily,
              fontSize: theme.type.fontSize[2],
              fill: theme.color.black,
              textAnchor: 'middle',
            }}
          >
            {d}
          </text>
        ))}
      </g>

      <g transform={`translate(${radius * 1.6}, 0)`}>
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="rgba(255, 255, 255, 0.75)"
          stroke={theme.color.white}
          strokeWidth="2"
        />
        <text
          x={radius}
          y={radius * 0.5}
          style={{
            fontFamily: theme.type.accent.fontFamily,
            fontSize: theme.type.fontSize[4],
            fill: theme.color.black,
            textAnchor: 'middle',
          }}
        >
          {vennData.digitalTechnology.title}
        </text>
        {vennData.digitalTechnology.skills.map((d, i) => (
          <text
            key={d}
            x={radius}
            y={radius * 0.65 + i * parseFloat(theme.type.lineHeight[4])}
            style={{
              fontFamily: theme.type.default.fontFamily,
              fontSize: theme.type.fontSize[2],
              fill: theme.color.black,
              textAnchor: 'middle',
            }}
          >
            {d}
          </text>
        ))}
      </g>

      <g>
        <clipPath id="set1">
          <circle cx={radius} cy={radius} r={255} />
        </clipPath>
        <clipPath id="set2" clipPath="url('#set1')">
          <circle
            cx={radius}
            cy={radius}
            r={255}
            transform={`translate(${radius * 1.6}, 0)`}
          />
        </clipPath>
        <rect
          clipPath="url('#set2')"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={theme.color.pink}
        />
      </g>
    </g>
  </g>
)

VennDiagram.propTypes = {
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.number.isRequired,
}

export default VennDiagram
