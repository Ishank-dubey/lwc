import { track } from 'lwc';
import HC_OTBA_JointImages from '@salesforce/resourceUrl/HC_OTBA_JointImages';
import tmpl from './otbaLWCOuterArticularObservation.html';
import OmniscriptFormula from 'omnistudio/omniscriptFormula';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OtbaLWCOuterArticularObservation extends OmniscriptBaseMixin(OmniscriptFormula) {
circles = [                
    { cy: 136, cx: 261, r: 5, 'data-value': 'Cervical spine' },
    { cy: 177, cx: 192, r: 5, 'data-value': 'Right Shoulder' },
    { cy: 175, cx: 330, r: 5, 'data-value': 'Left Shoulder' },
    { cy: 268, cx: 162, r: 5, 'data-value': 'Right Elbow' },
    { cy: 267, cx: 362, r: 5, 'data-value': 'Left Elbow' },
    { cy: 362, cx: 112, r: 5, 'data-value': 'Right Wrist' },
    { cy: 361, cx: 411, r: 5, 'data-value': 'Left Wrist' },
    { cy: 324, cx: 261, r: 5, 'data-value': 'Lumbar spine' },
    { cy: 366, cx: 261, r: 5, 'data-value': 'Sacroiliac joint' },
    { cy: 406, cx: 223, r: 5, 'data-value': 'Right Hip' },
    { cy: 406, cx: 300, r: 5, 'data-value': 'Left Hip' },
    { cy: 549, cx: 203, r: 5, 'data-value': 'Right Knee' },
    { cy: 549, cx: 320, r: 5, 'data-value': 'Left Knee' },
    { cy: 694, cx: 177, r: 5, 'data-value': 'Right Ankle' },
    { cy: 694, cx: 346, r: 5, 'data-value': 'Left Ankle' },
    { cy: 1048, cx: 146, r: 11, 'data-value': 'Left Wrist' },
    { cy: 1016, cx: 175, r: 8, 'data-value': 'Carpometacarpal Joint Left Thumb' },
    { cy: 967, cx: 208, r: 4, 'data-value': 'Metacarpophalangeal Joint Left Thumb' },
    { cy: 932, cx: 214, r: 4, 'data-value': 'Interphalangeal Joint Left Thumb' },
    { cy: 929, cx: 171, r: 4, 'data-value': 'Metacarpophalangeal Joint Left Index Finger' },
    { cy: 874, cx: 168, r: 4, 'data-value': 'Proximal Interphalangeal Joint Left Index Finger' },
    { cy: 833, cx: 162, r: 4, 'data-value': 'Distal Interphalangeal Joint Left Index Finger' },
    { cy: 925, cx: 145, r: 4, 'data-value': 'Metacarpophalangeal Joint Left Middle Finger' },
    { cy: 868, cx: 137, r: 4, 'data-value': 'Proximal Interphalangeal Joint Left Middle Finger' },
    { cy: 831, cx: 129, r: 4, 'data-value': 'Distal Interphalangeal Joint Left Middle Finger' },
    { cy: 935, cx: 117, r: 4, 'data-value': 'Metacarpophalangeal Joint Left Ring Finger' },
    { cy: 889, cx: 102, r: 4, 'data-value': 'Proximal Interphalangeal Joint Left Ring Finger' },
    { cy: 852, cx: 89, r: 4, 'data-value': 'Distal Interphalangeal Joint Left Ring Finger' },
    { cy: 950, cx: 90, r: 4, 'data-value': 'Metacarpophalangeal Joint Left Little Finger' },
    { cy: 912, cx: 72, r: 4, 'data-value': 'Proximal Interphalangeal Joint Left Little Finger' },
    { cy: 886, cx: 61, r: 4, 'data-value': 'Distal Interphalangeal Joint Left Little Finger' },
    { cy: 1048, cx: 381, r: 11, 'data-value': 'Right Wrist' },
    { cy: 1016, cx: 352, r: 8, 'data-value': 'Carpometacarpal Joint Right Thumb' },
    { cy: 966, cx: 319, r: 4, 'data-value': 'Metacarpophalangeal Joint Right Thumb' },
    { cy: 933, cx: 313, r: 4, 'data-value': 'Interphalangeal Joint Right Thumb' },
    { cy: 929, cx: 356, r: 4, 'data-value': 'Metacarpophalangeal Joint Right Index Finger' },
    { cy: 874, cx: 359, r: 4, 'data-value': 'Proximal Interphalangeal Joint Right Index Finger' },
    { cy: 834, cx: 365, r: 4, 'data-value': 'Distal Interphalangeal Joint Right Index Finger' },
    { cy: 925, cx: 382, r: 4, 'data-value': 'Metacarpophalangeal Joint Right Middle Finger' },
    { cy: 867, cx: 390, r: 4, 'data-value': 'Proximal Interphalangeal Joint Right Ring Finger' },
    { cy: 831, cx: 398, r: 4, 'data-value': 'Distal Interphalangeal Joint Right Middle Finger' },
    { cy: 935, cx: 409, r: 4, 'data-value': 'Metacarpophalangeal Joint Right Ring Finger' },
    { cy: 889, cx: 425, r: 4, 'data-value': 'Proximal Interphalangeal Joint Right Middle Finger' },
    { cy: 852, cx: 439, r: 4, 'data-value': 'Distal Interphalangeal Joint Right Ring Finger' },
    { cy: 950, cx: 437, r: 4, 'data-value': 'Metacarpophalangeal Joint Right Little Finger' },
    { cy: 912, cx: 455, r: 4, 'data-value': 'Proximal Interphalangeal Joint Right Little Finger' },
    { cy: 886, cx: 466, r: 4, 'data-value': 'Distal Interphalangeal Joint Right Little Finger' },
    { cy: 1499, cx: 119, r: 9, 'data-value': 'Subtalar Joint Left' },
    { cy: 1445, cx: 108, r: 8, 'data-value': 'Calaneocuboidal Joint Left' },
    { cy: 1439, cx: 152, r: 8, 'data-value': 'Talonavicular Joint Left' },
    { cy: 1374, cx: 165, r: 4, 'data-value': 'First Tarsometatarsal Joint Left' },
    { cy: 1281, cx: 183, r: 4, 'data-value': 'First Metatarsophalangeal Joint Left' },
    { cy: 1235, cx: 182, r: 4, 'data-value': 'Interphalangeal Joint Left' },
    { cy: 1384, cx: 143, r: 4, 'data-value': 'Second Tarsometatarsal Joint Left' },
    { cy: 1270, cx: 146, r: 4, 'data-value': 'Second Metatarsophalangeal Joint Left' },
    { cy: 1231, cx: 143, r: 4, 'data-value': 'Second Proximal Interphalangeal Joint Left' },
    { cy: 1213, cx: 142, r: 2, 'data-value': 'Second Distal Interphalangeal Joint Left' },
    { cy: 1391, cx: 124, r: 4, 'data-value': 'Third Tarsometatarsal Joint Left' },
    { cy: 1285, cx: 124, r: 4, 'data-value': 'Third Metatarsophalangeal Joint Left' },
    { cy: 1246, cx: 122, r: 4, 'data-value': 'Third Proximal Interphalangeal Joint Left' },
    { cy: 1229, cx: 122, r: 2, 'data-value': 'Third Distal Interphalangeal Joint Left' },
    { cy: 1402, cx: 108, r: 4, 'data-value': 'Fourth Tarsometatarsal Joint Left' },
    { cy: 1297, cx: 106, r: 4, 'data-value': 'Fourth Metatarsophalangeal Joint Left' },
    { cy: 1261, cx: 104, r: 4, 'data-value': 'Fourth Proximal Interphalangeal Joint Left' },
    { cy: 1245, cx: 104, r: 2, 'data-value': 'Fourth Distal Interphalangeal Joint Left' },
    { cy: 1415, cx: 94, r: 4, 'data-value': 'Fifth Tarsometatarsal Joint Left' },
    { cy: 1310, cx: 87, r: 4, 'data-value': 'Fifth Metatarsophalangeal Joint Left' },
    { cy: 1274, cx: 87, r: 4, 'data-value': 'Fifth Proximal Interphalangeal Joint Left' },
    { cy: 1262, cx: 89, r: 2, 'data-value': 'Fifth Distal Interphalangeal Joint Left' },
    { cy: 1499, cx: 405, r: 9, 'data-value': 'Subtalar Joint Right' },
    { cy: 1445, cx: 415, r: 8, 'data-value': 'Calaneocuboidal Joint Right' },
    { cy: 1439, cx: 371, r: 8, 'data-value': 'Talonavicular Joint Right' },
    { cy: 1374, cx: 359, r: 4, 'data-value': 'First Tarsometatarsal Joint Right' },
    { cy: 1281, cx: 341, r: 4, 'data-value': 'First Metatarsophalangeal Joint Right' },
    { cy: 1235, cx: 342, r: 4, 'data-value': 'Interphalangeal Joint Right' },
    { cy: 1384, cx: 381, r: 4, 'data-value': 'Second Tarsometatarsal Joint Right' },
    { cy: 1270, cx: 378, r: 4, 'data-value': 'Second Metatarsophalangeal Joint Right' },
    { cy: 1231, cx: 381, r: 4, 'data-value': 'Second Proximal Interphalangeal Joint Right' },
    { cy: 1213, cx: 382, r: 2, 'data-value': 'Second Distal Interphalangeal Joint Right' },
    { cy: 1391, cx: 400, r: 4, 'data-value': 'Third Tarsometatarsal Joint Right' },
    { cy: 1285, cx: 400, r: 4, 'data-value': 'Third Metatarsophalangeal Joint Right' },
    { cy: 1246, cx: 401, r: 4, 'data-value': 'Third Proximal Interphalangeal Joint Right' },
    { cy: 1229, cx: 401, r: 2, 'data-value': 'Third Distal Interphalangeal Joint Right' },
    { cy: 1402, cx: 416, r: 4, 'data-value': 'Fourth Tarsometatarsal Joint Right' },
    { cy: 1297, cx: 418, r: 4, 'data-value': 'Fourth Metatarsophalangeal Joint Right' },
    { cy: 1261, cx: 420, r: 4, 'data-value': 'Fourth Proximal Interphalangeal Joint Right' },
    { cy: 1245, cx: 420, r: 2, 'data-value': 'Fourth Distal Interphalangeal Joint Right' },
    { cy: 1415, cx: 429, r: 4, 'data-value': 'Fifth Tarsometatarsal Joint Right' },
    { cy: 1310, cx: 437, r: 4, 'data-value': 'Fifth Metatarsophalangeal Joint Right' },
    { cy: 1274, cx: 437, r: 4, 'data-value': 'Fifth Proximal Interphalangeal Joint Right' },
    { cy: 1262, cx: 436, r: 2, 'data-value': 'Fifth Distal Interphalangeal Joint Right' },    
    ];

    @track bodyPartSelections =[];
    lineWidth = 1;
    selectedLineWidth = 3;    
    blackStrokeColor = 'black';    
    blueStrokeColor  = 'blue';
    imageLoaded = false;
    imageWidth = 0;
    imageHeight = 0;
    jointImage = HC_OTBA_JointImages;        
    img = new Image();
    tooltipVisible = false;                

    connectedCallback()
    {
        this.img.src = this.jointImage;        
        this.img.onload = () => {             
            this.imageWidth = this.img.width;
            this.imageHeight = this.img.height;
            this.imageLoaded = true; 
        }; 
        this.showTheResult();                 
    }
    
    render() {             
        return tmpl;
    }    
    
    renderedCallback() {         
        this.showTheResult();       
    }

    showTheResult(){   
        if (this.jsonData && this.jsonData.PhysicalAssessment && this.jsonData.PhysicalAssessment.HC_CHA_OTBA_ArticularObservations) {
            let BodyPartAssessmentData = this.jsonData.PhysicalAssessment.HC_CHA_OTBA_ArticularObservations;
            if (!Array.isArray(BodyPartAssessmentData)) {
                BodyPartAssessmentData = [BodyPartAssessmentData];
            }
    
            this.bodyPartSelections = BodyPartAssessmentData
                .filter(item => item.HC_CHA_OTBA_BodyLocation)
                .map(item => ({
                    HC_CHA_OTBA_BodyLocation: item.HC_CHA_OTBA_BodyLocation,
                    HC_CHA_OTBA_RangeofMotion: item.HC_CHA_OTBA_RangeofMotion,
                    HC_CHA_OTBA_PassiveorActive: item.HC_CHA_OTBA_PassiveorActive,
                    HC_CHA_OTBA_Finding: item.HC_CHA_OTBA_Finding,
                    HC_CHA_OTBA_Measurement: item.HC_CHA_OTBA_Measurement,
                    HC_CHA_OTBA_Postoperative: item.HC_CHA_OTBA_Postoperative      
                }));
        }        
        
        if(this.jsonData && this.jsonData.PhysicalAssessment && this.jsonData.PhysicalAssessment.Block18 && this.jsonData.PhysicalAssessment.Block18.HC_CHA_OTBA_BodyLocationFormulaResult)
        {
            const formulaValue = this.jsonData.PhysicalAssessment.Block18.HC_CHA_OTBA_BodyLocationFormulaResult;
            if (formulaValue==1) {            
                this.updateCircleSelection();            
            }else{
                this.circles = this.circles.map(circle => ({
                    ...circle,
                    selected: false 
                }));
              }            
        }
        if (this.imageLoaded) {            
            this.drawCircles(false);          
        }
    }

    updateCircleSelection() {
        this.circles = this.circles.map(circle => ({
            ...circle,
            selected: this.isCircleBlue(circle) 
        }));
    }
    isCircleBlue(circle) {
        return this.bodyPartSelections.some(selection => selection.HC_CHA_OTBA_BodyLocation === circle['data-value']);
    }
   
    drawCircles(isTooltip) {        
        const canvas = this.template.querySelector('.circleCanvas');
        
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (this.img) {
            context.drawImage(this.img, 0, 0, this.imageWidth, this.imageHeight);
        }

        this.circles.forEach(circle => {
            if (circle.selected) {
                context.beginPath();
                context.arc(circle.cx, circle.cy, circle.r, 0, 2 * Math.PI);
                context.lineWidth = circle.selected ? this.selectedLineWidth : this.lineWidth;                                                          
                context.strokeStyle =  this.blueStrokeColor;            
                context.stroke();
                context.fillStyle= this.blueStrokeColor;
                context.fill();

                const matchedSelection = this.bodyPartSelections.find(selection =>
                    selection.HC_CHA_OTBA_BodyLocation === circle['data-value']
                );

                if (isTooltip && this.tooltipVisible && this.tooltipText === circle['data-value']) {
                    const tooltipLocation = circle['data-value'];
                    const tooltipProperties1 = `Range of Motion:  ${matchedSelection.HC_CHA_OTBA_RangeofMotion}`;
                    const tooltipProperties2 = `Passive or Active:  ${matchedSelection.HC_CHA_OTBA_PassiveorActive}`;
                    const tooltipProperties3 = `Finding:  ${matchedSelection.HC_CHA_OTBA_Finding}`;
                    const tooltipProperties4 = `Measurement (degree value):  ${matchedSelection.HC_CHA_OTBA_Measurement}`;
                    const tooltipProperties5 = `Post operative:  ${matchedSelection.HC_CHA_OTBA_Postoperative}`;
                    const tooltipWidth = Math.max(context.measureText(tooltipLocation).width, 200, 100) + 80;
                    const tooltipHeight = 160;

                    const x = 100;
                    const y = circle.cy - circle.r - tooltipHeight + 30;

                    context.fillStyle = 'rgba(255, 255, 255, 0.9)';                    
                    context.fillRect(x, y, tooltipWidth, tooltipHeight);

                    context.strokeStyle = this.blackStrokeColor;
                    context.lineWidth = 1; 
                    context.strokeRect(x, y, tooltipWidth, tooltipHeight);

                    context.fillStyle = 'black';
                    context.textAlign = 'left';
                    context.font = 'bold 12px Arial';
                    context.fillText(tooltipLocation, x + 10, y + 15);
                    context.font = '11px Arial'; 
                    const textWidth = tooltipWidth - 20;
                    const lines1 = this.wrapText(context, tooltipProperties1, textWidth, 11); 
                    lines1.forEach((line, index) => {
                        context.fillText(line, x + 10, y + 40 + index * 15);
                    });
                    const startY1 = y + 40 + lines1.length * 15;

                    const lines2 = this.wrapText(context, tooltipProperties2, textWidth, 11); 
                    lines2.forEach((line, index) => {
                        context.fillText(line, x + 10, startY1 + index * 15);
                    });
                    const startY2 = startY1 + lines2.length * 15;

                    const lines3 = this.wrapText(context, tooltipProperties3, textWidth, 11); 
                    lines3.forEach((line, index) => {
                        context.fillText(line, x + 10, startY2 + index * 15);
                    });
                    const startY3 = startY2 + lines3.length * 15;
                    const lines4 = this.wrapText(context, tooltipProperties4, textWidth, 11);
                    lines4.forEach((line, index) => {
                        context.fillText(line, x + 10, startY3 + index * 15);
                    });
                    const startY4 = startY3 + lines4.length * 15;
                    const lines5 = this.wrapText(context, tooltipProperties5, textWidth, 11);
                    lines5.forEach((line, index) => {
                        context.fillText(line, x + 10, startY4 + index * 15);
                    });

                }
                context.closePath();
            }
        });
    }
    handleCanvasMousemove(event)
    {
        const canvas = this.template.querySelector('.circleCanvas');
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        this.tooltipText = '';

        this.circles.forEach(circle => {
            const distance = Math.sqrt((x - circle.cx) ** 2 + (y - circle.cy) ** 2);
            if (distance <= circle.r) {
                this.tooltipText = circle['data-value'];
                this.tooltipVisible = true;
            }
        });

        if (!this.tooltipText) {
            this.tooltipVisible = false;
        }
        this.drawCircles(true);
    }
    handleCanvasMouseout() {
        this.tooltipVisible = false;        
        this.drawCircles(true);
    } 

    wrapText(context, text, maxWidth, lineHeight) {
        let words = text.split(' ');
        let lines = [];
        let line = '';

        for (let word of words) {
            let testLine = line + word + ' ';
            let metrics = context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && line !== '') {
                lines.push(line);
                line = word + ' ';
            } else {
                line = testLine;
            }
        }

        lines.push(line);
        return lines;
    }
}