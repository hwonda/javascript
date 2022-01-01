function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-._]/gi,'');

    var str = '';
    for(var i=0;i<new_id.length;i++){
        if(new_id[i] == '.' && new_id[i-1] == '.'){
            str += '';
        }
        else{
            str += new_id[is];
        }
    }
    new_id = str;
        
    return answer;
}