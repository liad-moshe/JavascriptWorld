class Graph {
    constructor(points = [], segments = []){
        this.points = points;
        this.segments = segments;
    }

    addSegment(seg){
        this.segments.push(seg);
    }

    isContainsSegment(seg){
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment(seg){
        if(!this.isContainsSegment(seg) && !seg.p1.equals(seg.p2)){
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    addPoint(point){
        this.points.push(point);
    }

    containsPoint(point){
        return this.points.find((p) => p.equals(point));
    }

    tryAddPoint(point){
        if(!this.containsPoint(point)){
            this.addPoint(point);
            return true;
        }
        return false;
    }

    draw(ctx){
        for(const seg of this.segments){
            seg.draw(ctx);
        }

        for(const point of this.points){
            point.draw(ctx);
        }
    }
}